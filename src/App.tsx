import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyPage from "./components/pages/MyPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/top" component={Top} exact /> */}
        <Route path="/mypage" component={MyPage} exact />
      </Switch>
    </Router>
  );
};

export default App;
