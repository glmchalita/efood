import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { Footer } from './styles'

export function Layout() {
  return (
    <div>
      <Outlet />

      <Footer>
        <div>
          <img src={logo} alt="" />

          <div>
            <Instagram size={24} strokeWidth={1.5} />
            <Facebook size={24} strokeWidth={1.5} />
            <Twitter size={24} strokeWidth={1.5} />
          </div>
        </div>

        <p>
          A eFood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </p>
      </Footer>
    </div>
  )
}
