import { appModule } from './app/main.module';

import './style.scss';
import "./app/angularUtils/dirPagination";



angular.bootstrap(document.body, [appModule], { strictDi: true });
