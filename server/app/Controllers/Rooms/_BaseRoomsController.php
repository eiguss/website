<?php
namespace App\Controllers\Rooms;

use App\Services\RoomsService;
use App\Validators\ParamsValidator;
use App\Controllers\_BaseController;

class _BaseRoomsController extends _BaseController 
{
    protected $roomsService;
    
    public function __construct(RoomsService $roomsService,ParamsValidator $paramsValidator)
    {
        $this->roomsService = $roomsService;
        parent::__construct($paramsValidator);
    }
}