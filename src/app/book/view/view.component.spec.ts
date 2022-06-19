import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponent } from './view.component';

describe('ViewComponent', () => {
    let fixture: ComponentFixture<ViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ViewComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewComponent);
        fixture.detectChanges();
    });
});
