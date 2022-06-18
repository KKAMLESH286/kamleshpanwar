import React from 'react'
import { Redirect, Routes, Switch } from 'react-router'
import BasePage from './BasePage'
import Layout from './components/Layout'

export default function RoutesPage() {
  const isAuthorized = true;
  return (
    <>
        {isAuthorized===false?(
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/dashboard" />
      ) : (
        <Layout>
          <BasePage />
        </Layout>
      )}
    </>
  )
}
