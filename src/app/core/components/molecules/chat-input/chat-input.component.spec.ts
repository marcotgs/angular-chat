import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { By } from '@angular/platform-browser';

import { NebularThemeModule } from '@shared/modules/nebular-theme.module';
import { ChatInputComponent } from './chat-input.component';
import { AppState } from '@store/app.state';
import { PERSON } from '@shared/constants';
import { addMessage } from '@store/chat';

describe('ChatInputComponent', () => {
  let component: ChatInputComponent;
  let fixture: ComponentFixture<ChatInputComponent>;
  let compiled: any;
  let dispatchSpy: jasmine.Spy;
  let store: MockStore<AppState>;
  const initialState: AppState = {
    chat: { messages: [], currentPerson: PERSON.FIRST_PERSON },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NebularThemeModule,
        NbInputModule,
        NbButtonModule,
        NbIconModule,
        ReactiveFormsModule,
      ],
      declarations: [ChatInputComponent],
      providers: [provideMockStore<AppState>({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date('2020-01-01'));

    fixture = TestBed.createComponent(ChatInputComponent);
    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch');
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should create and contain correct HTML elements', () => {
    expect(component).toBeTruthy();
    expect(compiled.querySelector('input')).toBeTruthy();
    expect(compiled.querySelector('button')).toBeTruthy();
  });

  it('should dispatch message to store', () => {
    const fakeEvent = { preventDefault: () => {} };
    component.chatForm.get('message')?.setValue('test');
    const formEl = fixture.debugElement.query(By.css('form'));

    formEl.triggerEventHandler('submit', fakeEvent);
    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      addMessage({ message: 'test', date: new Date('2020-01-01') }),
    );
  });
});
