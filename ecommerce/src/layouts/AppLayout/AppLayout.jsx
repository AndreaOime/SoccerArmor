import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Content>
          <Outlet />
        </Content>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
