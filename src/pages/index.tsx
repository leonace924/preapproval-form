import { NextPage } from 'next'
import Layout from '@components/Common/Layout'
import ApproveForm from '@components/Pages/Home/ApproveForm'

const Home: NextPage = () => {
  return (
    <Layout>
      <ApproveForm />
      {/* <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center"></main> */}

      {/* <footer className="flex items-center justify-center w-full h-24 border-t"></footer> */}
    </Layout>
  )
}

export default Home
