import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {
  AuthService
} from '../helpers/auth.service';

@Component({
  selector: 'cat-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  title = 'Header';
  selectedType: string;
  types: string[];
  public searchForm: FormGroup;

  constructor(private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }


  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchText: ['']
    });
  }

  public search(searchText: string) {
    this.searchForm.setValue({
      searchText: ''
    });
    this.router.navigate([`search-results/${searchText}`]);
  }


}
