import { useEffect, useState } from 'react';
import useDelayedRender from 'use-delayed-render';

import styles from 'styles/mobile-menu.module.css';

import clsxm from '@/lib/clsxm';

import StyledLink from '@/components/atoms/StyledLink';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={clsxm(styles.burger, 'visible md:hidden')}
        aria-label='Toggle menu'
        type='button'
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={clsxm(
            styles.menu,
            'flex flex-col bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur',
            isMenuRendered && styles.menuRendered
          )}
        >
          <li style={{ transitionDelay: '150ms' }}>
            <StyledLink
              variant='two'
              href='/'
              className='dark:border-gray-700 text-gray-900 dark:text-gray-100 text-xl font-bold'
            >
              Home
            </StyledLink>
          </li>
          <li style={{ transitionDelay: '175ms' }}>
            <StyledLink
              variant='two'
              href='/about'
              className='dark:border-gray-700 text-gray-900 dark:text-gray-100 text-xl font-bold'
            >
              About
            </StyledLink>
          </li>
          <li style={{ transitionDelay: '200ms' }}>
            <StyledLink
              variant='two'
              className='dark:border-gray-700 text-gray-900 dark:text-gray-100 text-xl font-bold'
              href='/project'
            >
              Project
            </StyledLink>
          </li>
          <li style={{ transitionDelay: '250ms' }}>
            <StyledLink
              variant='two'
              className='dark:border-gray-700 text-gray-900 dark:text-gray-100 text-xl font-bold'
              href='/blog'
            >
              Blog
            </StyledLink>
          </li>
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className='h-5 w-5 absolute text-gray-900 dark:text-gray-100'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
    >
      <path
        d='M2.5 7.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 12.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className='h-5 w-5 absolute text-gray-900 dark:text-gray-100'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}
    >
      <path d='M18 6L6 18' />
      <path d='M6 6l12 12' />
    </svg>
  );
}
