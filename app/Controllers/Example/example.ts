import Route from '@ioc:Adonis/Core/Route'
Route.group(()=>{
  Route.get('studentExample', 'Api/Example/ExampleController.getExampleByLimit')
}).prefix('api/example').middleware('genaral')
