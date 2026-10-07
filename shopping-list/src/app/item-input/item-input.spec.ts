import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInput } from './item-input';

describe('ItemInput', () => {
  let component: ItemInput;
  let fixture: ComponentFixture<ItemInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
