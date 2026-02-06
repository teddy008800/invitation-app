import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../services/api';

@Component({
  standalone: true,
  selector: 'app-invite',
  imports: [],
  templateUrl: './invite.html',
  styleUrl: './invite.scss',
})
export class Invite {
  invite: any;

  constructor(
    private route: ActivatedRoute,
    private api: Api
  ) {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.api.getInvitation(slug).subscribe(data => {
      this.invite = data;
    });
  }
}
