---
title: Blog Example
pubDate: 2022-06-09
updatedDate: 2022-11-20
tags: ["Example"]
description: Description
---


# 样式

Based on [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)

```javascript
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
```

# H1

## H2

### H3

#### H4

##### H5

###### H6

**bold**

*italic*

`code`

> 引用

## Stochastic Processes

Stochastic processes are ordered collections of random variables. They are denoted using $Y_t$, reflecting the fact that they are sequences of random variables that are ordered in time(t) (i.e., so that $Y_s$ is observed before $Y_t$ whenever $s<t$). The ordering of a time series is important when predicting future values using past observations.

A first-order autoregression, also known as an AR(1):

$$
Y_t = \delta + \phi Y_{t-1} + \epsilon_t
$$

where $\delta$ is a constant, $\phi$ is a model parameter measuring the strength of the relationship between two consecutive observations, and $\epsilon_t$ is a shock.

This first-order AR process can describe a wide variety of financial and economic time series (e.g., interest rates, commodity convenience yields, or the growth rate of industrial production).

## Covariance Stationary

Covariance stationarity depends on the first two moments of a time series: the mean and the autocovariances.

Autocovariance is a time-series specific concept. The autocovariance is defined as the covariance between a stochastic process at different points in time. Its definition is the timeseries analog of the covariance between two random variables. The hth autoco-variance is defined as:

$$
y_{t,h} = E[(Y_t-E[Y])(Y_{t-h}-E[Y_{t-h}])]
$$

Autocovariance is denoted using $y$, where the subscripts denote the period (i.e., t) and the lag (i.e., h) between observations.

When $h = 0$ then:

$$
y_{t,0} = E[(Y_t - E[Y_t])^2]
$$

When $Y_t$ is covariance-stationary (i.e., the autocovariance does not depend on time), the autocorrelation at lag $h$ is defined as the ratio:

$$
\rho_h = \frac{Cov[Y_t,Y_{t-h}]}{\sqrt{V[Y_t]V[Y_{t-h}]}} = \frac{y_h}{y_0}
$$

The symmetry follows from the third property of covari-ance stationarity, because the autocovariance depends only on $h$ and not $t$, so that:

$$
Cov[Y_t,Y_{t-h}] = Cov[Y_{t+h},Y_t]
$$

## White Noise

$$
\epsilon_t \sim WN(0,\sigma^2)
$$

where $\sigma^2$ is the variance of the shock. Note that any white noise process is covariance-stationary because the first two moments are time-invariant, and the variance is finite.

Shocks from a white noise process are used to simulate data. White noise processes $P_t$ have three properties.

1. Mean zero (i.e., $E[\epsilon_t] = 0$). This property is a convenience, because any process with an error that has non-zero mean can always be defined in terms of a mean-zero error.
2. Constant and finite variance (i.e., $V[\epsilon_t] = \sigma^2 < ∞$ ). This is a technical assumption that is needed for the third property.
3. Zero autocorrelation and autocovariance.

## Autoregressive(AR) model

$$
Y_t = \delta + \phi Y_{t-1} + \epsilon_t
$$

where $\delta$ is called the intercept, $\phi$ is the AR parameter, and the shock $\epsilon_t \sim WN(0, \sigma^2)$.

Denoting the mean of $Y_t$ by m and using the property of a covariance-stationary time series that:

$$
E[Y_t] = E[Y_{t-1}] = \mu
$$

$$
E[Y_t] =  \delta + \phi E[Y_{t-1}] + E[\epsilon_t]
$$
