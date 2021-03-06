import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/events.service';
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./index";

@Component({
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr>
            <div class="row">
                <div class="col-md-6" *ngFor="let event of events">
                    <event-thumbnail [event]="event" (click)="handleThumbnailClick(event.name)"></event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];
    
    constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute) {};

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(name) {
        this.toastrService.info(name, 'OK');
    }
};