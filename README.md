# react

React Learning

Install the Npm and Npm bundle with parcel
----> npm init

<!-- his utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (namasate_react)
version: (1.0.0)
description: Learning the React Code
entry point: (index.js)
test command: jest
git repository: yes
keywords: React
author: ravi Sankar
license: (ISC)
type: (commonjs)
About to write to /Users/ravisankar/Desktop/namasate_react/package.json:

{
  "name": "namasate_react",
  "version": "1.0.0",
  "description": "Learning the React Code",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "yes"
  },
  "keywords": [
    "React"
  ],
  "author": "ravi Sankar",
  "license": "ISC",
  "type": "commonjs"
}


Is this OK? (yes) -->

---> npm install -D parcel

<!-- added 122 packages, and audited 123 packages in 20s

71 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
ravisankar@FT-ITP-LAP-CH1-A21 react % npm fund
namasate_react@1.0.0
└─┬ https://opencollective.com/parcel
  │ └── parcel@2.16.4, @parcel/config-default@2.16.4, @parcel/bundler-default@2.16.4, @parcel/graph@3.6.4, @parcel/plugin@2.16.4, @parcel/workers@2.16.4, @parcel/profiler@2.16.4, @parcel/rust@2.16.4, @parcel/rust-darwin-arm64@2.16.4, @parcel/compressor-raw@2.16.4, @parcel/namer-default@2.16.4, @parcel/optimizer-css@2.16.4, lightningcss@1.32.0, lightningcss-darwin-arm64@1.32.0, @parcel/optimizer-html@2.16.4, @parcel/optimizer-image@2.16.4, @parcel/optimizer-svg@2.16.4, @parcel/optimizer-swc@2.16.4, @parcel/packager-css@2.16.4, @parcel/packager-html@2.16.4, @parcel/packager-js@2.16.4, @parcel/packager-raw@2.16.4, @parcel/packager-svg@2.16.4, @parcel/packager-wasm@2.16.4, @parcel/resolver-default@2.16.4, @parcel/node-resolver-core@3.7.4, @parcel/runtime-browser-hmr@2.16.4, @parcel/runtime-js@2.16.4, @parcel/runtime-rsc@2.16.4, @parcel/runtime-service-worker@2.16.4, @parcel/transformer-babel@2.16.4, @parcel/transformer-css@2.16.4, @parcel/transformer-html@2.16.4, @parcel/transformer-js@2.16.4, @parcel/transformer-json@2.16.4, @parcel/transformer-node@2.16.4, @parcel/transformer-postcss@2.16.4, @parcel/transformer-posthtml@2.16.4, @parcel/transformer-raw@2.16.4, @parcel/transformer-react-refresh-wrap@2.16.4, @parcel/error-overlay@2.16.4, @parcel/transformer-svg@2.16.4, @parcel/core@2.16.4, @parcel/cache@2.16.4, @parcel/diagnostic@2.16.4, @parcel/events@2.16.4, @parcel/feature-flags@2.16.4, @parcel/fs@2.16.4, @parcel/watcher@2.5.6, @parcel/watcher-darwin-arm64@2.5.6, @parcel/logger@2.16.4, @parcel/package-manager@2.16.4, @parcel/reporter-cli@2.16.4, @parcel/reporter-dev-server@2.16.4, @parcel/codeframe@2.16.4, @parcel/reporter-tracer@2.16.4, @parcel/utils@2.16.4, @parcel/markdown-ansi@2.16.4
  └─┬ https://github.com/chalk/chalk?sponsor=1
    │ └── chalk@4.1.2
    └── https://github.com/chalk/ansi-styles?sponsor=1
        └── ansi-styles@4.3.0 -->

And after this please check once Package.json, and package-lock.json

Differnce the version

https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json

Here Package-lock.json means lock the package for the version in parcel version.. supose some minoot patch will come that version will be update in package.json but not in package-lock.json.

Node_modules- this contain all modules fetch from npm (parcel)

package.json it like a configutation and node_modulies like an database it contain the actual data

parcel has an project own dependency .. this is know a transtive dependency that the node modules

Then the node modules have lot file so i will use gitignore for push the code in github and i have package and package lock file to push ther i wll regenerate the node modules again so that why i hide the node modules

command line: npm install

import React from "react"; import the react using this and this "react" means it will refer the node_modules inside reacr folder

# Parcel -> parcels.org

- Dev bulid
  -local server
  -Automatically refersh the page
  -HMR = Hot module replacement
  -file watching algorthm useing C++
  -cache - Faster builds
  -image opimzation
  -minifiaction
  -bundling
  -compress
  -consistent hashing
  -code spliting
  -differnect bundling - support old browers
  error hanling
  -HTTPS
  difference dev and prod build-
  - Tree shaking - remove unused code

  Browser list - This means we will decide the which Browser will need to enabled to show oru project for that purpose we used this

  Episode -3

  npx parcel index.html -> everytime ith kuduka venam so athuku nama scripts la add panikalam ---> enga add pananum na package.json la scipts nu erukum anga add pananum (dev and prod)

  npm dev or npm run dev

  React.createlement => is an object

  Jsx - javascript xml (use the dev life easier for build in react)

  jsx is a convertion for html and js

jsx is not html in js and js/html/jsx are different all are not same
jsx is a syntax

jsx is a not a valid js. exaple console la poi console.log(<h1>hello</h1>) this is not a valid js but this is a valid jsx

js engine understanding everything with ES6

jsx code js engine ku understand agathu so js engine reaches agura munadi at transpiled agum. epd na athu parcel bundle defaul ah panum with help of pakacge babel- ipo babel tha antha understand pani react ah understang agura mathr mathum

Bebhind the scene in JSX

JSX => React.createElement => ReactElement js (object) => Htmlelement (render)

Babel la jsx la eruka code reactelement ah change pana work agum like transpl=lied the data liek complier

If will give the attribute need to give camelcase like className, tabIndex and need to check how to use the jsx attribute for image tagand aherf

Babel.js is a free, open-source JavaScript transcompiler primarily used to convert modern ECMAScript 2015+ (ES6+) code into a backwards-compatible version of JavaScript that older web browsers or environments can execute

React Components

1. Class Based components (old based component)
2. functional components (new based component)

React functional component is a just javascript funtion

//if function return the react element this is a functioncal Component

const FunctionCompeent = () => {
return <h1>"Welcome the Function components"</h1>
};

const FunctionCompeent1 = () => (<h1>"Welcome the Function components"</h1>);

// Both FunctionCompeent && FunctionCompeent1 both are same and most of the develop not write written

Map la key for words kudkanum en na opitmize panurathu

so map loop la 100 record eruku ipo map key ila na everytime re render agitu erukum so ipo key word use pana antha key already eruthuchna atha skip pani new key id matum edukum so epomey map use panura apo key use panurathu best partice

dataList.map(restro => (<BodyResCard key = {restro.id} resdata={restro}/>))

key la id use ppanama index use panalam but react suggest never use index as a key

so key venum na unique id matum use panu no index

React element la - const heading like lower case use pananum athuvey functional component na captial for first words like HeaderComponent

function componeent kula react elemet injecr panalam and another function compoment inject panalam

render la (</>) ithu function component

same react elemetn kula function compoment inject panalam and aonther react elementinject panalam

render la (varible /obj) ithu normal react element

{normalelement} aprm intha inject panura {} vara data so attacker send panura response ah eruka jsx aithu sanitize pani the anupu i mean cross site scriting nadaknum automtaicalyy

<FunctionCompeent /> 
<FunctionCompeent ></FunctionCompeent> 
{FunctionCompeent()}

intha 3 ways function component object another function comoponet inject panalam

episode -4

// Episode 4 create online order
/** Header
Logo
nav items
body
container
card
footer
address
cpoyrights**/

//Basic header Component

Props is an properties this will pass dynamice data in functional component
(its jsut normal arugment to the function)

config drive ui

?. optional chaing like resdata?.data

Episode - 5
React hook

Hardcoded Data va componets add pana kudauthu

Componetn la file matum Caps la create pananum utility small case kudukala

Export la 2 type eruku named export and default export

name export na enaku rendu varible or object export aganum named exprot venum

suppose onu pothum tha default use panikalam

Two Types of Import and export

Default Export/Import

export default <varbile name >
import component from path

- Named Exprot/import

export const component
import {component} from path

# React Hooks

(Normal Js utility functions)

2 important hooks

useState() - superpowerful state varbile in react and import named import
useEffect()

const [listOfRestraunts] = useState([]) // useState la [] ithu default ah varbile la assgin agirum

const [listOfRestraunts, setListofRestraunts] = useState(listOfRestra)

264 - line ena panuthu na listOfRestraunts ithu vanthu default of usestate la eruka value edukum and setListofRestraunts update the list edukum

whenever the state variable updates react will be re render the components

Reconcilaition algorithm (also known as react fiber)

DOm na div container kula ellamey DOM than

Vitrual DOM na is representation of Actual DOM or div container

diff algo

Episode -6

Fetch the web api in ui for 2 approaches

page -> api call -> render. so ithula api respponse vara varikum page la ethuvum erukathu

page ->render -> api call -> render so ithu some ui visual eruku response vantha aprm again render agi full data tharum

UseEffect is an react hooks function

useEffect(() => {
//api call
},[]) so here useeffect takes 2 arguments

first argumens is call back funcrion {
//api call
}

and second arugmes is depencey array []

If the body component render it as soon as render cycle completed that time useeffect call back function called

Api call pana Fetch keywork use pananum, antha fetch keywormd js engine tharathu and fetch api response nama promise soluvanga so promises na then or catch use panuvanga or async await use panuvanga

Handling the reposen json use option chaning (?)
res?.dsa?.data?.name this is option chaining

Shimmer UI

//Condtional rendering
if (listOfRestraunts.length === 0) {
return <Shimmer />;
}

Episode -7

Where is use effect call

Usereffect call after every render of the component

if no dependecy array that means useeefect called on every component render
if depenedecy array is empty = [] => use effect is called on only iniaital render (just once)
what if i put some depenecdy in array [btmname] => useeefect call everytime btmname react is updated

React router for redirtecting differnt page

for that import the root js like app.js {createbrowserrouter}

routerprovide actully provide the router configuration to app

error page nama customize panura mathr oru hook eruku "useRouteError" ithu more information from the error

aprm eponalum use start agutho athalam hooks

Ipo page la potachu now about click pana adobu page ku pagonum header apdye erukanum body matum change aganum so athuku children routes create panuraga epd na anatha router provider la chilidern [] add pani anga assign panuraga athuku react-router dom outlet oru function component tharuthu

1.  ipo link redirect panura apo whole page redirect agum athu vanthu <a herf> kudatha so antha avoid pana nama {link} reacr router tharuthu atha use pana antha body component marum referesh not a whold page

  <Link to="/contact">Contact us</Link> -> referes the only partaucalr component

<a href="/about">About us</a> -> referes the all component

iN react 2 types of routing in web application

client side routing - netwok api call ilama static value html varuthu
server side rounting - network APi call pani fetch panurathu tha ithu(REST API)

epis-8
class compoentn okay ah
Background Process
ipo class component initiated agura apo first athu consturctor call agum aprm ah render call agum

Class based component vanthu:

Construction and render and componentdidmount these all method use panum

Ipo parecnt class based component la
first contrutoor will called and render will called there any child class componentn is there means then child constriuctor will call and child render will called and childe componentdidmount called and the only called parent compoentndidmount call

ComponentDIdmount use to make the API calls

hirerachy For React LifeCycle

- Parent Constructor
- Parent Render
  - First child Constructor
  - First child Render

  - Second Child Construtor
    -second Render

  <DOM UPDATED - IN SINGLE BATCH>

  -First child componentDIDmount
  -second child componentDIDmount

- Parent componentDIdmount


Episode 9

Custom hooks

FIrst Hooks na ena - Javascript la special function of js react tharuthu athu tha hooks like. usestate, useeffect, and useparams intha useparms reactrouten dome tharuthu



use for onlien and offlien check pana online event lister eruka findo out for online or offline


Optimze the APP

chuking, cde spillting, dymnaci budleing, dymnamic bundleing , lazyloading


Lazy() it comes an react pakage - lazy hte is funtion