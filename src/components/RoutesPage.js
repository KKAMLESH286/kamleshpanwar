import React from 'react'
import { Redirect, Switch } from 'react-router'
import { Route, Navigate } from 'react-router-dom'
import DashBoard from './DashBoard'
import ProjectOverview from './ProjectDetails/ProjectOverview'

export default function RoutesPage() {
    return (
        <Switch>
            <Redirect
                from=""
                exact={true}
                replace to="/dashboard"
            />
            <Route
                path='/dashboard'
                component={DashBoard}
            />
             <Route
                path='/overview/id'
                component={ProjectOverview}
            />
        </Switch>
    )
}
