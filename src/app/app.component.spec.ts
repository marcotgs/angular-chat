import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { PagesModule } from '@pages/pages.module';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppState } from '@store/app.state';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  const initialState: AppState = { chat: { messages: [] } };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), PagesModule],
      declarations: [AppComponent],
      providers: [provideMockStore<AppState>({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.get(Router);
    fixture!.ngZone!.run(() => {
      router.initialNavigation();
    });
  }));

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-chat'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-chat');
  });

  it('should render home page', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#home-page')).not.toBeNull();
  });
});
