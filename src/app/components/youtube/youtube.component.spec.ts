import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeComponent } from './youtube.component';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app-state.interface';
import { Observable, of } from 'rxjs';
import { templateJitUrl } from '@angular/compiler';

describe('YoutubeComponent', () => {
  let component: YoutubeComponent;
  let fixture: ComponentFixture<YoutubeComponent>;

  const stateMock = <IAppState> { };
  const storeMock = {
    select(): Observable<IAppState> {return of(stateMock); },
    dispatch() {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeComponent ],
      providers: [
        {
          provide: Store,
          useValue: storeMock
        }
      ]
    })
    .compileComponents();

    TestBed.overrideComponent(YoutubeComponent, {
      remove: {
        templateUrl: './youtube.component.html'
      }
    });

    TestBed.overrideComponent(YoutubeComponent, {
      set: {
        template: '<div></div>'
      }
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   describe('delMovie', () => {

//   it('should dispatch action for delete', () => {
//     // Arrange gebeurt in de BeforeEach methodes

//     // Act
//     component.submit

//   });
// });
});
