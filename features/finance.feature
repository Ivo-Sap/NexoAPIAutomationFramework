Feature: Google finance functionality

  @PriceDeviation
  Scenario Outline: Average price deviation for specific pair
    When user records initial price for "BTC-USD"
    And time interval is <interval> minutes
    And data for "BTC-USD" is get every <frequency> seconds
    Then the average price deviation from the initial value is less than 1 percent
    And every price deviation from the initial value is less than 2 percent

    Examples:
      | interval | frequency |
      | 1        | 10        |
      | 3        | 10        |
      | 5        | 10        |

  @PriceDeviation
  Scenario Outline: Average price deviation for different pairs
    When user records initial price for <pair>
    And time interval is <interval> minutes
    And data for <pair> is get every <frequency> seconds
    Then the average price deviation from the initial value is less than <average_deviation> percent
    And every price deviation from the initial value is less than <max_deviation> percent

    Examples:
      | pair      | interval | frequency | average_deviation | max_deviation |
      | "BTC-USD" | 1        | 5         | 1                 | 2             |
      | "ETH-USD" | 2        | 10        | 2                 | 4             |
      | "XRP-USD" | 3        | 15        | 3                 | 6             |