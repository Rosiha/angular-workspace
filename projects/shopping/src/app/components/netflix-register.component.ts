import {Component} from "@angular/core";

@Component({
    selector:'app-register',
    template:`
        <div class="register-container">
            <div>
                <p>Ready to watch? Enter your email to create or
                 restart your membership.</p>
                <div>
                    <input type="email"placeholder="Email address">
                    <button>
                        Get Started>
                    </button>
                </div>
            </div>
        </div>
    `,
    styles:[".register-container{dispalay:flex;justify-content:center;align-items:center;height:400px}"]
})
export class NetflixRegister
{
    
}