<template>
  <form action="#" method="POST" class="col-span-6">
    <div class="overflow-hidden sm:rounded-md">
      <h3 class="text-lg mt-10 mb-2 uppercase text-gray-800">Personal information</h3>
      <div class="grid grid-cols-6 mb-4 gap-4 text-gray-700">
        <div class="col-span-6 md:col-span-3">
          <TextField name="first-name" title="First Name" placeholder="Jane" :isRequired="true" />
        </div>
        <div class="col-span-6 md:col-span-3">
          <TextField name="last-name" title="Last Name" placeholder="Doe" :isRequired="true" />
        </div>
        <div class="col-span-6 sm:col-span-6">
          <TextField name="company-name" title="Company Name" placeholder="ACME Inc." :isRequired="false" />
        </div>
      </div>
      <h3 class="text-lg mt-10 mb-2 uppercase text-gray-800">Location</h3>
      <div class="grid grid-cols-6 mb-4 gap-4">
        <div class="col-span-6">
          <TextField name="street-address" title="Street Address" placeholder="1001 Sunshine Street" :isRequired="true" />
          <TextField name="optional-information" title="Optional Information" placeholder="Appt. 75" :isRequired="false" />
        </div>
        <div class="col-span-6 sm:col-span-6 lg:col-span-3">
          <TextField name="city" title="City" placeholder="Miami" :isRequired="true" />
        </div>
        <div class="col-span-6 sm:col-span-3 lg:col-span-3">
          <SelectField name="state" :list="stateList" :isRequired="false" />
        </div>
        <div class="col-span-3">
          <SelectField name="country" :list="countryList" :isRequired="false" />
        </div>
        <div class="col-span-3">
          <TextField name="postal-code" title="Zip / Postal Code" placeholder="47500" :isRequired="true" />
        </div>
      </div>
      <h3 class="text-lg mt-10 mb-2 uppercase text-gray-800">Account information</h3>
      <div class="grid grid-cols-6 mb-4 gap-4">
        <div class="col-span-6 sm:col-span-6">
          <TextField name="email-address" title="Email Address" placeholder="email@example.com" :isRequired="true" />
        </div>
        <div class="col-span-6 sm:col-span-6">
          <TextField name="phone-number" title="Phone Number" placeholder="+33 (0) 133 742 42" :isRequired="true" />
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TextField from '@/components/storefront/fields/TextField.vue'
import SelectField from '@/components/storefront/fields/SelectField.vue'

@Component({
  components: {
    TextField,
    SelectField
  }
})
export default class CheckoutFields extends Vue {

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
    { key: 'CA', value: 'California' }
  ]

}
</script>