<?php

namespace App\Services;

class RoomsService
{
    public function getRooms()
    {
        $rooms = $this->getItemJson('rooms');
        $images = $this->getItemJson('images');
        $locations = $this->getItemJson('locations');
        $features = $this->getItemJson('features');
        $neighbors = $this->getItemJson('neighbors');

        foreach ($rooms as $id => $room) {
            $rooms[$id]['neighborhood'] = $neighbors[$room['neighborhood']];
            $rooms[$id]['location'] = $locations[$room['location']];
            foreach (explode(',', $room['room_services']) as $serviceId) {
                $rooms[$id]['roomServices'][$serviceId] = $features[$serviceId];
            }
            foreach (explode(',', $room['house_services']) as $serviceId) {
                $rooms[$id]['houseServices'][$serviceId] = $features[$serviceId];
            }
            foreach (explode(',', $room['images_ids']) as $imagesId) {
                $rooms[$id]['images'][$imagesId] = $images[$imagesId];
            }
            unset($rooms[$id]['images_ids']);
            unset($rooms[$id]['room_services']);
            unset($rooms[$id]['house_services']);
        }

        return $rooms;
    }

    private function getItemJson($itemName)
    {
        $items = json_decode(file_get_contents(__DIR__.'/../DataJsons/'.$itemName.'.json'), true);

        $itemsById = [];
        foreach ($items as $item) {
            $itemsById[$item['id']] = $item;
        }

        return $itemsById;

    }
}