import { Component, OnDestroy } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'checkmilk-angular-sistema';
  protected loading = false;
  private routerEventInscricao;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.routerEventInscricao = router.events.subscribe(
      (routerEvent: RouterEvent) => {
        this.handleRouterEvent(routerEvent);
      }
    );
  }

  ngOnDestroy() {
    this.routerEventInscricao.unsubscribe();
  }

  private handleRouterEvent(routerEvent: RouterEvent) {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.loading = false;
    }
  }
}
