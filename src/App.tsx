import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from "react-router-dom";
import routes from './config/routes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC<{}> = props =>
  <BrowserRouter>
		<Switch>
			{
				routes.map ((route,index) => {
					return (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							render={(props: RouteComponentProps<any>) => (
								<route.component
									name={route.name}
									{...props}
									{...route.props}
								/>
							)}
						/>
					)
				})
			}
		</Switch>
	</BrowserRouter>

export default App;
