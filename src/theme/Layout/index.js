import React from 'react';
import Layout from '@theme-original/Layout';
import ContactUsButton from '../../components/ContactBtn';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <ContactUsButton />
    </>
  );
} 