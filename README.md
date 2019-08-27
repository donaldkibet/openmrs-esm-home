# openmrs-esm-home

Micro front ends home and patient search repo

## Development setup

1. Install [Visual Studio Code](https:/code.visualstudio.com/)
2. Install [node and npm](https://nodejs.org/en/)
3. `git clone https://github.com/openmrs/openmrs-esm-home.git`. the Github link [https://github.com/openmrs/openmrs-esm-home.git](https://github.com/openmrs/openmrs-esm-home.git)
4. [https://github.com/openmrs/openmrs-esm-home.git](https://github.com/openmrs/openmrs-esm-home.git). Clone your fork.
5. `npm install` inside your repo
6. Now [Enable insecure localhost request](https://superuser.com/questions/772762/how-can-i-disable-security-checks-for-localhost)
7. Navigate to [OpenMRS SPA page](https://openmrs-spa.org/openmrs/spa/login)
8. Open browser console and enable developer tools. Paste the command `localStorage.setItem("openmrs:devtools", true);` to the console, after this refresh your page.
9. Click on the dev tool icon that appears to your right bottom corner of your browser after refreshing.
10. Add the Module Overrides. for this repository

- Add `@openmrs-esm-home` for this repo on the Default URL
- `https://localhost:8081/openmrs-esm-home.js` for the Override URL

11. run `npm run start-https` to start your development using https.
12. Refresh your browser and you are good to go!!.
13. Happy Coding.
