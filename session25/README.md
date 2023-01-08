## 14.1 Kalman Filters

## Study Guide

After you have completed the reading(s), you should be able to answer the following questions:

- A dynamical system refers to the fact that the system changes state over time. Why is it not a contradiction then to refer to a time-invariant dynamical system?
- How do the transition and emission models collectively specify the joint probability in a Kalman filter? Explain the role of each model in your own words.

### Pre-Class Work Guide

#### Latent Linear Dynamical Systems vs. Kalman Filters

Barber (2012) uses slightly different notation from the rest of the literature when discussing Kalman filters (also known as Latent Linear Dynamical Systems). In Barber the model is described as:

<a href="https://www.codecogs.com/eqnedit.php?latex=h(t)&space;=&space;Ah(t-1)&space;&plus;&space;\eta(t)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?h(t)&space;=&space;Ah(t-1)&space;&plus;&space;\eta(t)" title="h(t) = Ah(t-1) + \eta(t)" /></a>

<a href="https://www.codecogs.com/eqnedit.php?latex=v(t)=&space;Bh(t)&space;&plus;&space;\epsilon(t)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?v(t)=&space;Bh(t)&space;&plus;&space;\epsilon(t)" title="v(t)= Bh(t) + \epsilon(t)" /></a>

<a href="https://www.codecogs.com/eqnedit.php?latex=\text{where&space;}&space;\eta(t)&space;\sim&space;\mathcal{N}(0,&space;\Sigma),&space;\text{&space;and&space;}&space;\epsilon(t)&space;\sim&space;\mathcal{N}(0,&space;\Sigma&space;')" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\text{where&space;}&space;\eta(t)&space;\sim&space;\mathcal{N}(0,&space;\Sigma),&space;\text{&space;and&space;}&space;\epsilon(t)&space;\sim&space;\mathcal{N}(0,&space;\Sigma&space;')" title="\text{where } \eta(t) \sim \mathcal{N}(0, \Sigma), \text{ and } \epsilon(t) \sim \mathcal{N}(0, \Sigma ')" /></a>

are two different zero-mean distributions of appropriate dimensionality.

In control literature on the Kalman filter, the following notation is standard:

<a href="https://www.codecogs.com/eqnedit.php?latex=x(t&plus;1)&space;=&space;Fx(t)&space;&plus;&space;Bu(t)&space;&plus;&space;w(t)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?x(t&plus;1)&space;=&space;Fx(t)&space;&plus;&space;Bu(t)&space;&plus;&space;w(t)" title="x(t+1) = Fx(t) + Bu(t) + w(t)" /></a>

<a href="https://www.codecogs.com/eqnedit.php?latex=z(t)&space;=&space;Hx(t)&space;&plus;&space;v(t)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?z(t)&space;=&space;Hx(t)&space;&plus;&space;v(t)" title="z(t) = Hx(t) + v(t)" /></a>

<a href="https://www.codecogs.com/eqnedit.php?latex=\text{where&space;}&space;w(t)&space;\sim&space;\mathcal{N}(0,&space;\Sigma),&space;\text{&space;and&space;}v(t)&space;\sim&space;\mathcal{N}(0,&space;\Sigma&space;')" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\text{where&space;}&space;w(t)&space;\sim&space;\mathcal{N}(0,&space;\Sigma),&space;\text{&space;and&space;}v(t)&space;\sim&space;\mathcal{N}(0,&space;\Sigma&space;')" title="\text{where } w(t) \sim \mathcal{N}(0, \Sigma), \text{ and }v(t) \sim \mathcal{N}(0, \Sigma ')" /></a>

Notice that this is the same model, except that now there is an extra term *Bu(t)*, which allows us to influence the hidden variable directly (although we still can't directly observe it). In system-theoretic terms, this represents the input.

## Pre-class work

### 1. Air Traffic Control

We have a very noisy radar that is able to measure position, but not velocity. Fortunately, by observing very many radar sweeps one can infer how fast the plane is moving, and in which direction. One can improve the model if there is a good model of how airplanes tend to behave.

- The radar makes sweeps every 5 seconds.
- The radar can identify the position of an airplane to a radius of 500m (but not the velocity).
- While planes typically fly in three dimensions, we will assume that our planes all fly at the same altitude, so we only have to model their position in two dimensions.
- Airplanes tend to keep flying in the same heading and direction, unless otherwise instructed to by an air traffic controller.
- Air traffic controllers can give instructions to accelerate in a particular direction (this isn't very realistic, but keeps the Kalman filter simpler). Assume that these values only change every five seconds.
- There are large pockets of turbulence which affect the airplane's velocity, and can be modeling as drawn from a normal with zero mean and 1m/s standard deviation (the x and y axis are independent of each other).

**Answer the following:**

1. Write down a model for the aircraft, and the resulting Kalman Filter equations that you would need to estimate the velocity given the noisy position measurement and process noise in the form of the wind gusts.

**HINT:** for each coordinate direction, a first-order dynamic model is defined by:
<p align="center"> <i>new speed = old speed + acceleration * dT,</i></p>
and
<p align="center"> <i> new position = old position + speed * dT </i>.</p>
where *dT = 5s* is the sampling rate. Your resulting model should have four states, two for the x and y positions and two for the velocities. The accelerations in this case are the inputs in each coordinate direction. Use the 500m accuracy to write an expression for the measurement noise.

2. Read up on the [filterpy](http://nbviewer.jupyter.org/github/rlabbe/Kalman-and-Bayesian-Filters-in-Python/blob/master/table_of_contents.ipynb) documentation, which is a Python package for implementing Kalman filtering. Especially pay attention to the [procedural form](https://filterpy.readthedocs.io/en/latest/kalman/KalmanFilter.html#procedural-form), since we will use this in class.  Use the [following textbook](https://nbviewer.jupyter.org/github/rlabbe/Kalman-and-Bayesian-Filters-in-Python/blob/master/table_of_contents.ipynb) if you get stuck.

*For this question, you will need to explicitly write out all equations of the Kalman filter. Bring your equations in a format that allows you to paste them into a Google doc.  Make sure that you understand how to represent your equations in filterpy.*
