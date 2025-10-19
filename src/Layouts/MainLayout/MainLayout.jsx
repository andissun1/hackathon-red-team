import { Outlet } from 'react-router-dom';
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import style from './mainLayout.module.css';
import { BreadCrumbs } from '../../Shared/BreadCrambs/BreadCrumbs';
import { Modal } from '../../Components/Modal/Modal';

export const MainLayout = () => {
  return (
    <div className={style.mainContainer}>
      <Header />
      <div className={style.content}>
        <BreadCrumbs />
        <Outlet />
      </div>
      <Footer />
      <Modal />
    </div>
  );
};
