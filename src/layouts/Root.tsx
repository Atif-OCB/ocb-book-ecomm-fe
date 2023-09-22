import {
  Outlet,
} from '@tanstack/react-router';

import { Header } from '../components/sections/Header';
import { Footer } from '../components/sections/Footer';

export function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}