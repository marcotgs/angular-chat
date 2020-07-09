import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NebularThemeModule } from '@shared/modules/nebular-theme.module';
import { ComponentsModule } from '@components/components.module';
import { HomePageComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { AppState } from '@store/app.state';

describe('HomeComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  const initialState: AppState = { chat: { messages: [] } };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NebularThemeModule,
        ComponentsModule,
        RouterModule.forRoot(routes),
      ],
      declarations: [HomePageComponent],
      providers: [provideMockStore<AppState>({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
