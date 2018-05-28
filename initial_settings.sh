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
echo "out"  > "/sys/class/gpio/gpio121/direction"
echo "out"  > "/sys/class/gpio/gpio121/direction"
echo "out"  > "/sys/class/gpio/gpio121/direction"
echo "in" > "/sys/class/gpio/gpio121/direction"
echo "in" > "/sys/class/gpio/gpio121/direction"
echo "in" > "/sys/class/gpio/gpio121/direction"
echo "in" > "/sys/class/gpio/gpio121/direction"