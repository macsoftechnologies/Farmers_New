import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  constructor() {}
  

  plainMenu: IMenuItem[] = [
    // {
    //   name: "OTHERS",
    //   type: "link",
    //   tooltip: "Others",
    //   icon: "blur_on",
    //   state: "others/blank",
    // },
    // {
    //   name: "DOC",
    //   type: "extLink",
    //   tooltip: "Documentation",
    //   icon: "library_books",
    //   state: "http://demos.ui-lib.com/egret-doc/"
    // },
    {
      name: "Dashboard",
      type: "link",
      tooltip: "Dasboard",
      icon: "blur_on",
      state: "dashboard",
    },
    {
      name: "Farmers-List",
      type: "link",
      tooltip: "Farmers-List",
      icon: "blur_on",
      state: "farmerslist",
    },
  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle: string = "Frequently Accessed";
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.plainMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  
  // you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    this.menuItems.next(this.plainMenu);
  }
}
