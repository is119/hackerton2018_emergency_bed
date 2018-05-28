#!/bin/bash

echo "121" > "/sys/class/gpio/export"
echo "122" > "/sys/class/gpio/export"
echo "123" > "/sys/class/gpio/export"
echo "124" > "/sys/class/gpio/export"
echo "125" > "/sys/class/gpio/export"
echo "126" > "/sys/class/gpio/export"
echo "127" > "/sys/class/gpio/export"
echo "129" > "/sys/class/gpio/export"

echo "out"  > "/sys/class/gpio/gpio121/direction"
echo "out"  > "/sys/class/gpio/gpio122/direction"
echo "out"  > "/sys/class/gpio/gpio123/direction"
echo "out"  > "/sys/class/gpio/gpio124/direction"
echo "in" > "/sys/class/gpio/gpio125/direction"
echo "in" > "/sys/class/gpio/gpio126/direction"
echo "in" > "/sys/class/gpio/gpio127/direction"
echo "in" > "/sys/class/gpio/gpio128/direction"