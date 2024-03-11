import { Layout } from 'components/Layout/layout'
import { AppBar } from 'components/AppBar/app-bar'
import { TaskForm } from 'components/TaskForm/task-form'
import { TaskList } from 'components/TaskList/task-list'

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  )
}
