import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularThemeModule } from '@shared/modules/nebular-theme.module';
import { ComponentsModule } from '@components/components.module';
import { HomePageComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

describe('HomeComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NebularThemeModule,
        ComponentsModule,
        RouterModule.forRoot(routes),
      ],
      declarations: [HomePageComponent],
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
