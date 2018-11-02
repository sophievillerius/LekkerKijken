import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetailListComponent } from './video-detail-list.component';

describe('VideoDetailListComponent', () => {
  let component: VideoDetailListComponent;
  let fixture: ComponentFixture<VideoDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
