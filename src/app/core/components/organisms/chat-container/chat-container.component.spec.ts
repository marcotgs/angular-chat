import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NbCardModule } from '@nebular/theme';

import { NebularThemeModule } from '@shared/modules/nebular-theme.module';
import { ChatContainerComponent } from './chat-container.component';
import { AppState } from '@store/app.state';
import { PERSON } from '@shared/constants';

describe('ChatContainerComponent', () => {
  let component: ChatContainerComponent;
  let fixture: ComponentFixture<ChatContainerComponent>;
  const initialState: AppState = {
    chat: { messages: [], currentPerson: PERSON.FIRST_PERSON },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NebularThemeModule, NbCardModule],
      declarations: [ChatContainerComponent],
      providers: [provideMockStore<AppState>({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
