import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularThemeModule } from '@shared/modules/nebular-theme.module';
import { NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { ChatInputComponent } from './chat-input.component';

describe('ChatInputComponent', () => {
  let component: ChatInputComponent;
  let fixture: ComponentFixture<ChatInputComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NebularThemeModule,
        NbInputModule,
        NbButtonModule,
        NbIconModule,
      ],
      declarations: [ChatInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInputComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create and contain correct HTML elements', () => {
    expect(component).toBeTruthy();
    expect(compiled.querySelector('input')).toBeTruthy();
    expect(compiled.querySelector('button')).toBeTruthy();
  });
});
