<?php
namespace App\Controllers\Rooms;

use Slim\Psr7\Request;
use Slim\Psr7\Response;
use App\Controllers\Rooms\_BaseRoomsController;

class getRoomsController extends _BaseRoomsController
{
    public function __invoke(Request $request, Response $response)
    {
        $response->getBody()->write(
            json_encode([
                'rooms' => $this->roomsService->getRooms(),
            ])
        );

        return $response->withHeader('Content-Type', 'application/json; charset=utf-8');
    }
}