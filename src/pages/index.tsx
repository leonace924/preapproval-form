import { NextPage } from 'next'
import View from '@components/Common/View'
import Layout from '@components/Common/Layout'
import StickyBar from '@components/Common/StickyBar'
import Product from '@components/Pages/Home/Product'
import ApproveForm from '@components/Pages/Home/ApproveForm'

const Home: NextPage = () => {
  return (
    <Layout>
      <StickyBar />

      <View className="lg:grid lg:flex-1 lg:grid-cols-2">
        <Product />
        <ApproveForm />
      </View>
      {/* <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center"></main> */}

      {/* <footer className="flex items-center justify-center w-full h-24 border-t"></footer> */}
    </Layout>
  )
}

export default Home
