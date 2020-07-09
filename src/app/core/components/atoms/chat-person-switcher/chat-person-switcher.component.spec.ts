import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { NbActionsModule } from '@nebular/theme';
import { NebularThemeModule } from '@shared/modules/nebular-theme.module';
import { PERSON } from '@shared/constants';
import { AppState } from '@store/app.state';
import { setPerson } from '@store/chat';

import { ChatPersonSwitcherComponent } from './chat-person-switcher.component';

describe('ChatPersonSwitcherComponent', () => {
  let component: ChatPersonSwitcherComponent;
  let fixture: ComponentFixture<ChatPersonSwitcherComponent>;
  let compiled: any;
  let store: MockStore<AppState>;
  let dispatchSpy: jasmine.Spy;
  const initialState: AppState = {
    chat: { messages: [], currentPerson: PERSON.FIRST_PERSON },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NbActionsModule, NebularThemeModule, CommonModule],
      declarations: [ChatPersonSwitcherComponent],
      providers: [provideMockStore<AppState>({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPersonSwitcherComponent);
    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch');
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    const actions = fixture.debugElement.queryAll(By.css('nb-action'));

    expect(component).toBeTruthy();
    expect(actions[0].nativeElement.textContent).toContain(
      PERSON.FIRST_PERSON.name,
    );
    expect(actions[1].nativeElement.textContent).toContain(
      PERSON.SECOND_PERSON.name,
    );
  });

  it('should change person', () => {
    const actions = fixture.debugElement.queryAll(By.css('nb-action'));
    store.setState({
      ...initialState,
      chat: { messages: [], currentPerson: PERSON.SECOND_PERSON },
    });

    actions[1].triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(actions[1].classes).toEqual({ active: true });
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      setPerson({ person: PERSON.SECOND_PERSON }),
    );
  });
});
