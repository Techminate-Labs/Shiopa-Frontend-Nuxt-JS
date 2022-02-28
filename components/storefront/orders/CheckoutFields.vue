<template>
  <div>
    <div class="grid grid-cols-6 mb-4 gap-4 text-gray-700 overflow-hidden sm:rounded-md">
      <div class="col-span-6 md:col-span-3">
        <TextField 
          @valueChange="(val) => getFields.firstName = val" 
          :value="getFields.firstName" 
          name="first-name" 
          title="First Name" 
          placeholder="Jane" 
          :isRequired="true" />
      </div>
      <div class="col-span-6 md:col-span-3">
        <TextField 
          @valueChange="(val) => getFields.lastName = val" 
          :value="getFields.lastName" 
          name="last-name" 
          title="Last Name" 
          placeholder="Doe" 
          :isRequired="true" />
      </div>
      <div class="col-span-6 sm:col-span-6">
        <TextField 
          @valueChange="(val) => getFields.companyName = val" 
          :value="getFields.companyName"
          name="company-name" 
          title="Company Name" 
          placeholder="ACME Inc." 
          :isRequired="false" />
      </div>
    </div>

    <h3 class="text-lg mt-10 mb-2 uppercase text-gray-800">Location</h3>
    <div class="grid grid-cols-6 mb-4 gap-4">
      <div class="col-span-6">
        <TextField
          @valueChange="(val) => getFields.streetAddress = val"
          :value="getFields.streetAddress"
          name="street-address"
          title="Street Address"
          placeholder="1001 Sunshine Street" 
          :isRequired="true" />
        <TextField
          @valueChange="(val) => getFields.optionalInfo = val"
          :value="getFields.optionalInfo"
          name="optional-information"
          title="Optional Information"
          placeholder="Appt. 75" 
          :isRequired="false" />
      </div>
      <div class="col-span-6 sm:col-span-6 lg:col-span-3">
        <TextField
          @valueChange="(val) => getFields.city = val"
          :value="getFields.city"
          name="city"
          title="City"
          placeholder="Miami"
          :isRequired="true" />
      </div>
      <div class="col-span-6 sm:col-span-3 lg:col-span-3">
        <SelectField
          @valueChange="(val) => getFields.state = val"
          :value="getFields.state"
          name="state" :list="stateList" 
          :isRequired="true" />
      </div>
      <div class="col-span-3">
        <SelectField
          @valueChange="(val) => getFields.country = val"
          :value="getFields.country"
          name="country" :list="countryList" 
          :isRequired="true" />
      </div>
      <div class="col-span-3">
        <TextField
          @valueChange="(val) => getFields.zipCode = val"
          :value="getFields.zipCode"
          name="postal-code" 
          title="Zip / Postal Code"
          placeholder="47500"
          :isRequired="true" />
      </div>
    </div>
    <h3 class="text-lg mt-10 mb-2 uppercase text-gray-800">Account information</h3>
    <div class="grid grid-cols-6 mb-4 gap-4">
      <div class="col-span-6 sm:col-span-6">
        <TextField
          @valueChange="(val) => getFields.email = val"
          :value="getFields.email"
          name="email-address" 
          title="Email Address"
          placeholder="email@example.com"
          :isRequired="true" />
      </div>
      <div class="col-span-6 sm:col-span-6">
        <TextField
          @valueChange="(val) => getFields.phone = val"
          :value="getFields.phone"
          name="phone-number"
          title="Phone Number"
          placeholder="+33 (0) 133 742 42" 
          :isRequired="true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

// components
import TextField from '@/components/storefront/fields/TextField.vue'
import SelectField from '@/components/storefront/fields/SelectField.vue'

// types
import TCheckoutFields from '@/types/order/CheckoutFields'

@Component({
  components: {
    TextField,
    SelectField
  }
})
export default class CheckoutFields extends Vue {

  @Prop({ required: true }) fields: TCheckoutFields
  
  public countryList: Array<Object> = [
    { key: 'US', value: 'United States' },
    { key: 'CA', value: 'Canada' },
    { key: 'MX', value: 'Mexico' },
    { key: 'UY', value: 'Uruguay' },
    { key: 'BN', value: 'Bangladesh' },
    { key: 'IN', value: 'India' },
    { key: 'FR', value: 'France' },
  ]
  public stateList: Array<Object> = [
    { key: 'ALK', value: 'Alaska' },
    { key: 'ALB', value: 'Alabama' },
    { key: 'CAL', value: 'California' }
  ]

  get getFields(): TCheckoutFields {
    return this.fields
  }

}
</script>