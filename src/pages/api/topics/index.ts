import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { topicValidationSchema } from 'validationSchema/topics';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getTopics();
    case 'POST':
      return createTopic();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getTopics() {
    const data = await prisma.topic
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'topic'));
    return res.status(200).json(data);
  }

  async function createTopic() {
    await topicValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.quiz?.length > 0) {
      const create_quiz = body.quiz;
      body.quiz = {
        create: create_quiz,
      };
    } else {
      delete body.quiz;
    }
    const data = await prisma.topic.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
