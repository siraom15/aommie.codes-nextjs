import Head from 'next/head'
import React from 'react'
import { Layout } from 'antd';
const { Content } = Layout;
import { FacebookOutlined, GithubOutlined, MediumOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar'
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Contact Me 📝 | aommie.codes</title>
      </Head>
      <Layout className="container p-0" theme="light" >
        <Navbar selected="3" />
        <Content className="p-5">
          <div className="content text-center">

            <div className="display-5">Contact 📝</div>
            <p>Keep in touch with these 🙂</p>
            <div className="display-1 d-flex flex-column">
              <Link href="https://www.facebook.com/siri.in.th/">
                <a target="_blank">
                  <FacebookOutlined />
                </a>
              </Link>
              <Link href="https://aommie.codes/">
                <a target="_blank">
                  <LinkedinOutlined />
                </a>
              </Link>
              <Link href="https://www.instagram.com/srwxaom/">
                <a target="_blank">
                  <InstagramOutlined />
                </a>
              </Link>
              <Link href="https://www.github.com/siraom15/">
                <a target="_blank">
                  <GithubOutlined />
                </a>
              </Link>
              <Link href="  https://siriwataom.medium.com/">
                <a target="_blank">
                  <MediumOutlined />
                </a>
              </Link>
            </div>
          </div>
        </Content>
      </Layout>

    </>
  )
}

export default Contact;
