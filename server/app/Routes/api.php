<?
use Slim\Routing\RouteCollectorProxy;
use App\Middlewares\AuthMiddleware;
use App\Middlewares\RightsMiddleware;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

use App\Controllers\LoggedUserController;

$app->group('/api', function (RouteCollectorProxy $app) {
    $app->group('/logged-user', function (RouteCollectorProxy $app) {
        $app->get('', App\Controllers\LoggedUser\getUserInfoController::class)
            ->add(AuthMiddleware::class);
        $app->get('/is-logged',  App\Controllers\LoggedUser\isLoggedController::class);
        $app->post('/login', App\Controllers\LoggedUser\loginController::class);
        $app->post('/logout', App\Controllers\LoggedUser\logoutController::class)
            ->add(AuthMiddleware::class);
    });

    $app->get('/[{path:.*}]', function (Request $request, Response $response, $args) {
        $response->getBody()->write('Route not found');
    
        return $response->withStatus(404);
    })
    ->add(AuthMiddleware::class);
});