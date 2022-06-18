import React,{Suspense,lazy} from 'react'
import DashBoard from './components/DashBoard'
import { Route, Navigate } from 'react-router-dom'
import { Redirect, Switch } from 'react-router'
import { LayoutSplashScreen } from './components/SplashScreen/SplashScreen'
import ProjectOverview from './components/ProjectDetails/ProjectOverview'
const OverviewPage = lazy(() =>
  import("./RoutesPage")
);
export default function BasePage() {
    return (
        <Suspense fallback={<LayoutSplashScreen/>}>
            <Switch>
                {
                    <Redirect exact from="/" to ="/dashboard" />
                }
                <Route path="/dashboard" component={DashBoard} />
                <Route path="/overview-details" component={OverviewPage}/>
            </Switch>
        </Suspense>

    );
}
