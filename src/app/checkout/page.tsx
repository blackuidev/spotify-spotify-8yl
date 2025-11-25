"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const CheckoutPage: React.FC = () => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for order submission logic
    console.log('Submitting order with:', { shippingInfo, paymentMethod, paymentDetails });
    alert('Order Placed! (This is a placeholder action)');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>

      <form onSubmit={handleSubmitOrder} className="space-y-8">
        {/* Shipping Information */}
        <Card>
          <CardHeader>
            <CardTitle>Shipping Information</CardTitle>
            <CardDescription>Enter your shipping address details.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-full">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={shippingInfo.fullName}
                onChange={handleShippingChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="col-span-full">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                type="text"
                value={shippingInfo.address}
                onChange={handleShippingChange}
                placeholder="123 Main St"
                required
              />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                type="text"
                value={shippingInfo.city}
                onChange={handleShippingChange}
                placeholder="New York"
                required
              />
            </div>
            <div>
              <Label htmlFor="state">State / Province</Label>
              <Input
                id="state"
                name="state"
                type="text"
                value={shippingInfo.state}
                onChange={handleShippingChange}
                placeholder="NY"
                required
              />
            </div>
            <div>
              <Label htmlFor="zip">Zip Code</Label>
              <Input
                id="zip"
                name="zip"
                type="text"
                value={shippingInfo.zip}
                onChange={handleShippingChange}
                placeholder="10001"
                required
              />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                name="country"
                type="text"
                value={shippingInfo.country}
                onChange={handleShippingChange}
                placeholder="USA"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Payment Details */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
            <CardDescription>Select your preferred payment method.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup
              defaultValue={paymentMethod}
              onValueChange={setPaymentMethod}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label htmlFor="credit-card">Credit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal">PayPal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="google-pay" id="google-pay" />
                <Label htmlFor="google-pay">Google Pay</Label>
              </div>
            </RadioGroup>

            {paymentMethod === 'credit-card' && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="col-span-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    value={paymentDetails.cardNumber}
                    onChange={handlePaymentDetailsChange}
                    placeholder="XXXX XXXX XXXX XXXX"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    type="text"
                    value={paymentDetails.expiryDate}
                    onChange={handlePaymentDetailsChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    name="cvc"
                    type="text"
                    value={paymentDetails.cvc}
                    onChange={handlePaymentDetailsChange}
                    placeholder="XXX"
                    required
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Order Summary / Confirmation */}
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
            <CardDescription>Review your order before placing it.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-semibold">$99.99</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="font-semibold">$5.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
              <span>Total:</span>
              <span>$104.99</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              By clicking "Place Order", you agree to our terms and conditions.
            </p>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Place Order</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default CheckoutPage;
