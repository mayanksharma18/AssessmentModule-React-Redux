import React from 'react';
import NodeQuiz from './NodeQuiz';
import ReactQuiz from './ReactQuiz';
import JavaScriptQuiz from './JavaScriptQuiz';
import Main from '../Main/Main';
import { Route, Switch, withRouter } from 'react-router-dom';

const routes = [
    {
      path: "/quiz/react",
      component: ReactQuiz,
    },
    {
      path: "/quiz/javascript",
      component: JavaScriptQuiz,
    },
    {
      path: "/quiz/nodejs",
      component: NodeQuiz

    }
  ];

const index = (props) => {
  return (
    <Switch>
      {routes.map(route => (
        <Route exact path={route.path} component={route.component} />
      ))}
      <Route exact path="/" component={()=><Main history={props.history}/>}/>
    </Switch>
  );
};

export default withRouter(index);
