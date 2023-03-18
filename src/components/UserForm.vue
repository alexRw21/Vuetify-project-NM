
  <template>
    <v-sheet width="300" class="mx-auto">
  
      <v-form ref="form">
        <v-text-field
          v-model="name"
          :counter="15"
          :rules="nameRules"
          label="Nom"
          required
        ></v-text-field>
  
        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Mr/M"
          required
        ></v-select>

        <v-responsive
    class="mx-auto"
    max-width="344"
  >
    <v-text-field
      hide-details="auto"
      label="Adresse mail"
      placeholder="DavidAwouaire@hotmail.com"
      :rules="mailRules"
      type="email"
    ></v-text-field>
  </v-responsive>

  <v-responsive
    class="mx-auto mt-5"
    max-width="344"
  >
    <v-text-field
      label="Mot de passe"
      type="input"
      :rules="passwordRules"
      hint="Veuillez entrer votre mot de passe"
    ></v-text-field>
  </v-responsive>

        <v-file-input
    v-model="files"
    placeholder="Importez votre image"
    label="Photo de profil*"
    multiple
    prepend-icon="mdi-paperclip"
  >
    <template v-slot:selection="{ fileNames }">
      <template v-for="fileName in fileNames" :key="fileName">
        <v-chip
          size="small"
          label
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </v-chip>
      </template>
    </template>
  </v-file-input>
  
        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'Vous devez acceptez avant de continuer!']"
          label="Êtes-vous d'accord avec le règlement?"
          required
        ></v-checkbox>
  
        <div><h3>*Non obligatoire</h3></div>
        <div class="d-flex flex-column">
          <v-btn
            color="success"
            class="mt-4"
            block
            @click="validate"
          >
            Valider
          </v-btn>
  
          <v-btn
            color="error"
            class="mt-4"
            block
            @click="reset"
          >
            Réinitialiser le formulaire
          </v-btn>
  
          <v-btn
            color="warning"
            class="mt-4"
            block
            @click="resetValidation"
          >
            Réinitialiser la validation
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </template>

<script>

export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Nom est requis!',
      v => (v && v.length <= 15) || 'Le nom doit faire moins de 15 charactères',
    ],
    select: null,
    items: [
      'Monsieur',
      'Madame',
      'Autre'
    ],
    checkbox: false,
    files: [],
    password: '',
    passwordRules: [
      v => !!v || 'Mot de passe requis!',
      v => (v && v.length >= 7) || 'Le nom doit faire au moins 7 charactères',
    ],
    mail: '',
    mailRules:[
      v => !!v || 'Adresse mail requise!',
      v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)|| 'Adresse Invalide',
    ],

  }),
  

  methods: {
    async validate () {
      const { valid } = await this.$refs.form.validate()

      if (valid) alert('Utilisateur créé')
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>