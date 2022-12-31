import Head from 'next/head'
import Header from '../components/Header'
import TaskForm from '../components/TaskForm'
import { GetServerSideProps } from 'next'
import TaskList from '../components/TaskList'
import { prisma } from '../lib/prisma'

export interface Task {
  id: string|number
  name: string
}

export interface Tasks {
  tasks: Task[]
}

export const getServerSideProps: GetServerSideProps=async () => {
  const tasks=await prisma.task.findMany({
    select: {
      id: true,
      name: true,
    }
  });

  return { props: { tasks } };
}


const Home=({ tasks }: Tasks) => {
  return (
    <>
      <Head>
        <title>Task Manager</title>
      </Head>
      <Header />
      <TaskForm />
      <TaskList tasks={tasks} />
    </>
  )
}

export default Home;